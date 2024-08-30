import './App.css'
import userData from './userData.json'
import friends from './friends.json';
import Profile from './components/Profile/Profile';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';
import FriendList from './components/FriendList/FriendList';

export default function App() {
   return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
       <TransactionHistory items={transactions} />
           <FriendList friends={friends} />
    </>
  )
}