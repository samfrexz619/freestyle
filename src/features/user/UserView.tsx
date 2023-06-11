import { fetchUsers } from "./userSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import TableComp from "@/components/Table";


const UserView = () => {

  const tableHeaders: string[] = ['name', 'username', 'email', 'phone', 'website', 'action']
  
  const dispatch = useAppDispatch()
  const users = useAppSelector((state)=> state.user)
  useEffect(()=> {
    dispatch(fetchUsers())
  },[])
  console.log({...users.users})
  return ( 
    <div>
      <div>
        <TableComp headers={tableHeaders} tabData={users.users} />
      </div>
    </div>
   );
}
 
export default UserView;