import UserCard from '@/components/UserCard';
import { prisma } from '@/lib/prisma';
import styles from './page.module.css';

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
}
