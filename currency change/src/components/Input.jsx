import { useEffect, useId } from "react";

    
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = true,
  className = "",
}) {
  const amountInputId = useId(); //used for generating unique ids that can be passed to accessibility attributes
  return (
    <>
      <div
        className={`bg-white text-sm rounded-lg w-[25rem] h-[5rem] flex  text-black ${className}`}
        // thodi different css coz if a user want's to input custom css so it eassily give and it will
        // be easily reflected on the component
      >
        <div className="w-1/2 flex flex-col justify-center px-3  items-start gap-y-3">
          <label htmlFor={amountInputId}>{label}</label>
          <input
            type="number"
            className="w-full text-black outline-none border-none bg-white pl-3 h-7 text-md"
            placeholder="Amount"
            id={amountInputId}
            disabled={amountDisable}
            value={amount}
            onChange={(e) => {
              onAmountChange && onAmountChange(Number(e.target.value)); //if onAmountChange exists then calls the function()
            }}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center  px-3 items-end gap-y-3">
          <label htmlFor="select" className="">
            Select
          </label>
          <select
            name="select"
            className="h-7 w-1/3 rounded-lg cursor-pointer outline-none bg-gray-100"
            value={selectCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
              disabled = { currencyDisable };
            }}
          >
            //while using maps one should always give an key to imporve
            performance
            {currencyOption.map((e) => (
              <option key={e} value={e}>
                {" "}
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
export default InputBox;
