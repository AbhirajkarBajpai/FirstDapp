import { ethers } from "ethers";
import "./Buy.css";

const Buy = ({ state }) => {
  const buyCoffee = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const amount = ethers.utils.parseEther("0.001"); // Use ethers.utils.parseEther to correctly format the amount
    try {
      const transaction = await contract.buyCoffee(name, message, {
        value: amount,
      });
      await transaction.wait();
      console.log("Transaction is done");
    } catch (error) {
      console.error("Error sending the transaction:", error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={buyCoffee}>
          <div>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;
