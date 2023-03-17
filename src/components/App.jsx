import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Container } from './App.styled';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile userProfile={user} />
      <Statistics title="upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
