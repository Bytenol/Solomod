export type badge_t = "platinum" | "silver" | "gold";


export default interface iUser {
    userId: number,
    userName: string,
    avatarUrl: string,
    badge: badge_t
}