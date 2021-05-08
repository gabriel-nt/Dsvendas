import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const Table = () => {
  const [activePage, setActivePage] = useState(0);
  const [page, setPage] = useState<SalePage>({} as SalePage);

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`);
      setPage(response.data)
    }

    loadData();
  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {
              page.content && page.content.map(row => (
                <tr key={row.id}>
                  <td>{formatLocalDate(row.date, 'dd/MM/yyyy')}</td>
                  <td>{row.seller.name}</td>
                  <td>{row.visited}</td>
                  <td>{row.deals}</td>
                  <td>{row.amount}</td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
      <Pagination page={page} onPageChange={changePage}/>
    </>
  )
}

export default Table;