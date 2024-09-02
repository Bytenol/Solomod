import iUser from "./iUser";

export type iCodeBitLang = "web" |
    "py";


export default interface iCodeBitResponse extends iUser {
    count: number,
    "projects": [
        {
            id: number,
            name: string,
            language: iCodeBitLang,
            votes: number,
            comments: number,
            createdDate: string,
            modifiedDate: string,
            viewCount: number,
            publicId: string,
            isPublic: boolean,
        },
    ]
}