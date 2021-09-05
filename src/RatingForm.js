import React from 'react';
import StarInput from './StarInput';

/* If a user interacts with the star rating app using keyboard, for every onChange focus event, 
we will be submitting the rating. That is undesireable. In order to prevent that, we could add
a hidden submit button. 

Other alternative is to not submit the rating for onChange event. Instead, just change the state.
And have a submit button at the end to POST the rating to server.
*/
class RatingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Currently, there are no reviews for this product.'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(target) {
        const {name, value} = target;
        this.setState({[name]: value, message: `You rated the product ${value} ${value === '1'? 'star': 'stars'}!`});
    }

    render() {
        const selectedValue = this.state.starRating;
        return (
            <div className="rating-form">
              <form>
                  <StarInput name="starRating" value="1" id="star1" selected={1 <= selectedValue} checked={selectedValue === '1'} onInputChange={this.handleChange}>
                    1 star
                  </StarInput>
                  <StarInput name="starRating" value="2" id="star2" selected={2 <= selectedValue} checked={selectedValue === '2'} onInputChange={this.handleChange}>
                    2 stars
                  </StarInput>
                  <StarInput name="starRating" value="3" id="star3" selected={3 <= selectedValue} checked={selectedValue === '3'} onInputChange={this.handleChange}>
                    3 stars
                  </StarInput>
                  <StarInput name="starRating" value="4" id="star4" selected={4 <= selectedValue} checked={selectedValue === '4'} onInputChange={this.handleChange}>
                    4 stars
                  </StarInput>
                  <StarInput name="starRating" value="5" id="star5" selected={5 <= selectedValue} checked={selectedValue === '5'} onInputChange={this.handleChange}>
                    5 stars
                  </StarInput>
              </form>
              <p>{this.state.message}</p>
            </div>
        );
    }
}

export default RatingForm;