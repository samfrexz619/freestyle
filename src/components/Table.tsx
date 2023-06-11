import { CiEdit } from 'react-icons/ci'
import '@/assets/_table.scss'
import { Users } from '@/features/user/userSlice'

interface TabProps {
  headers: string[];
  tabData: Users[];
}

const TableComp = ({headers, tabData}: TabProps) => {
  
  return ( 
    <div className={`shadow ring-1 ring-black ring-opacity-5 rounded-lg overflow-x-auto reset`}>
      <table className={`shadow-sm divide-y divide-gray-200 w-full`}>
        <thead className='bg-gray-100'>
          <tr>
            {
              headers.map((title, index) => (
                <th key={index} className='px-3 py-3.5 text-left text-sm font-semibold capitalize'>{title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody className='divide-gray-200 bg-white divide-y'>
          {
            tabData.map(data => (
              <tr key={data.id}>
                <td className='px-3 py-4 text-sm text-gray-500'>{data.name}</td>
                <td className='px-3 py-4 text-sm text-gray-500'>{data.username}</td>
                <td className='px-3 py-4 text-sm text-gray-500'>{data.email}</td>
                <td className='px-3 py-4 text-sm text-gray-500'>{data.phone}</td>
                <td className='px-3 py-4 text-sm text-gray-500'>{data.website}</td>
                <td className='px-3 py-4 text-sm text-gray-500'>
                  <span role='button'><CiEdit /></span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
   );
}
 
export default TableComp;