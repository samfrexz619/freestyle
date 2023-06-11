import { increment, decrement } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const CakeView = () => {
  const cake = useAppSelector((state)=> state.cakeReducer.value)

  const dispatch = useAppDispatch()

  const handleIncre =()=> {
    dispatch(increment())
  }
  const handleDecrec =()=> {
    dispatch(decrement())
  }
  return ( 
    <main>
      <div>{cake}</div>
      <span onClick={handleIncre}>add</span>
      <span onClick={handleDecrec}>minus</span>
    </main>
   );
}
 
export default CakeView;