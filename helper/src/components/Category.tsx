function Category(props: any) {
    return (
    <div>
        <img src={props.props.img} alt="Pic" width="50" height="40"></img>
        <ul>
            <li>{props.props.services[0]}</li>
            <li>{props.props.services[1]}</li>
            <li>{props.props.services[2]}</li>
            <li>{props.props.services[3]}</li>
        </ul>
    </div>
    );
  }

export default Category