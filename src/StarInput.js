import React from "react";

class StarInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onInputChange(e.target);
      }

    render() {
        const id = this.props.id;
        const selected = this.props.selected;
        return (
            <React.Fragment>
                <input 
                    type="radio" 
                    id={id} 
                    value={this.props.value}
                    className={`visuallyhidden ${selected ? 'selected' : ''}`}
                    checked={this.props.checked}
                    name={this.props.name}
                    onChange={this.handleChange}
                />
                <label htmlFor={id} className="label">
                    <span className="visuallyhidden">
                        {this.props.children}
                    </span>

                    <svg viewBox="0 0 512 512" className="icon" xmlns="http://www.w3.org/2000/svg">
                        <path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path>
                    </svg>
                </label>
            </React.Fragment>
        );
    }
}

export default StarInput;