import { useState, useEffect } from "react";
import "./Orders.css";

const Orders = ({ state }) => {
  const [orders, setOrder] = useState([]);
  const { contract } = state;
  useEffect(() => {
    const orderMessage = async () => {
        try {
            const order = await contract.getOrders();
            setOrder(order);
          } catch (error) {
            console.error("Error fetching orders:", error);
          }
    };
    contract && orderMessage();
  }, [contract]);
  console.log(orders);
  return (
    <>
      <p>Messages</p>
      {orders.map((order) => {
        return (
          <div
            key={Math.random()}
          >
            <table
            >
              <tbody>
                <tr>
                  <td
                  >
                    {order.customerName}
                  </td>
                  <td
                  >
                    {new Date(order.timestamp * 1000).toLocaleString()}
                  </td>
                  <td
                  >
                    {order.note}
                  </td>
                  <td
                  >
                    {order.customerAddress}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};
export default Orders;