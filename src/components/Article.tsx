interface Article {
    id: string;
    date: string;
    title: string;
    text: string;
    comments?: {
        id: string;
        user: string;
        text: string;
    }[];
}

interface ArticleList {
    article: Article
}

const Art = ({ article }: ArticleList) => {
    return (
        <>
            <h1>{article.title}</h1>
            <section>{article.text}</section>
        </>
    )
}

export default Art