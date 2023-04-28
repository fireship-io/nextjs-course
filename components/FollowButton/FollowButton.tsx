import { getServerSession } from 'next-auth';
import FollowClient from './FollowClient';
import { prisma } from '@/lib/prisma';

interface Props {
  targetUserId: string;
}

export default async function FollowButton({ targetUserId }: Props) {
  const session = await getServerSession();

  const currentUserId = await prisma.user
    .findUnique({ where: { email: session?.user?.email! } })
    .then((user) => user?.id!);

  const isFollowing = await prisma.follows.findFirst({
    where: { followerId: currentUserId, followingId: targetUserId },
  });

  return (
    <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
  );
}
