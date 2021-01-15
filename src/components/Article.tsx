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
        <div>
            <h1>{article.title}</h1>
            <button>Click</button>
            <section>{article.text}</section>
        </div>
    )
}

export default Art