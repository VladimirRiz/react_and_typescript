import { Component } from 'react'


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

interface State {
    isOpen: boolean
}



class Art extends Component<ArticleList, State> {
    state: State = {
        isOpen: true
    }

    onToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        if (!this.state.isOpen) return null
        const { article } = this.props
        return <section>{article.text}</section>
    }

    render() {
        const { isOpen } = this.state
        const { article } = this.props
        return (
            <div>
                <h1>{article.title}</h1>
                <button onClick={this.onToggle}>{isOpen ? 'Close' : 'Open'}</button>
                {this.getBody()}
            </div>
        )
    }
}

export default Art