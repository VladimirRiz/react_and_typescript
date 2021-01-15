import React from 'react'
import Art from './Article'

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

interface ArticleListProps {
    articles: Article[]
}

const ArticleList = ({ articles }: ArticleListProps) => {
    const article = articles.map((article) => <li><Art article={article} /></li>)
    return (
        <ul>
            {article}
        </ul>
    )
}

export default ArticleList