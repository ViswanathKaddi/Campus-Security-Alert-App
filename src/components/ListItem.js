import React, { Component } from 'react';
import { Text } from 'react-native';
//import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class ListItem extends Component {
  // onRowPress() {
  //   Actions.employeeEdit({ employee: this.props.employee });
  // }

  render() {
    const { emergencytype, description, location } = this.props.alert;

    return (
      // <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
      <Card>

          <CardSection style={styles.alertStyle}>
            <Text style={styles.titleStyle}>
              {emergencytype}
            </Text>
          </CardSection>

          <CardSection>
            <Text style={styles.descriptionStyle}>
              Location: {location}
            </Text>
          </CardSection>

          <CardSection>
            <Text style={styles.descriptionStyle}>
              {description}
            </Text>
          </CardSection>

      </Card>
      // </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 17,
    paddingLeft: 15,
    color: '#05025b',
  },
  alertStyle: {
    backgroundColor: '#dee5ac'
  },
  descriptionStyle: {
    fontSize: 11,
    paddingLeft: 15
  }
};

export default ListItem;
