class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({liked: true})}>
        Like
      </button>
    );
  }
}

ReactDOM.render(<LikeButton/>, document.querySelector('#react_btn'));