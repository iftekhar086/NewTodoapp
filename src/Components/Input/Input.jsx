import styles from "./input.module.css"
// eslint-disable-next-line react/prop-types
const Input = ({ changeHandler, value, enterkeyHandler, isEditInput }) => {
  return (
    <input type="text"
      onChange={(e) => changeHandler(e.target.value)}
      value={value}
      className={isEditInput ? `${styles['input-box']}`: ``}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          enterkeyHandler();
        }
      }} />

  )


}

export default Input
