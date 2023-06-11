import UserView from "@/features/user/UserView";


const HomePage = () => {
  return ( 
    <main>
      <p>hi home</p>
      <div className="w-[93%] mx-auto">
        <UserView  />
      </div>
    </main>
   );
}
 
export default HomePage;