import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { alertUpdate, alertCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common'

class AlertCreate extends Component {
  onButtonPress() {
    const { emergencytype, location, description } = this.props;

    this.props.alertCreate({ emergencytype: emergencytype || 'Robbery', location, description });
  }

  render() {
    return (
      <Card>

      <CardSection style={{ flexDirection: 'column' }}>
        <Text style={styles.pickerTextStyle}>Alert Type</Text>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.props.emergencytype}
          onValueChange={value => this.props.alertUpdate({ prop: 'emergencytype', value })}
        >
          <Picker.Item label="     Robbery" value="Robbery" />
          <Picker.Item label="     Fire Breakout" value="Fire Breakout" />
          <Picker.Item label="     Sexual Assault" value="Sexual Assault" />
          <Picker.Item label="     Vandalism" value="Vandalism" />
          <Picker.Item label="     Earthquake" value="Earthquake" />
          <Picker.Item label="     Floods" value="Floods" />
          <Picker.Item label="     Shooting" value="Shooting" />
          <Picker.Item label="     Wild Fire" value="Wild Fire" />
          <Picker.Item label="     Terrorism" value="Terrorism" />
          <Picker.Item label="     Other" value="Emergency" />
        </Picker>

      </CardSection>

        <CardSection>
          <Input
            label="Location"
            placeholder="eg: near MLK Library"
            value={this.props.location}
            onChangeText={value => this.props.alertUpdate({ prop: 'location', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Description"
            placeholder="There was a......"
            value={this.props.description}
            onChangeText={value => this.props.alertUpdate({ prop: 'description', value })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Send Alert
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
   pickerTextStyle: {
     fontSize: 18,
     paddingLeft: 20,
     paddingTop: 11
   },
   pickerStyle: {
     flex: 1,
     paddingLeft: 8
   }
};


const mapStateToProps = (state) => {
  const { emergencytype, location, description } = state.alertForm;

  return { emergencytype, location, description };
};

export default connect(mapStateToProps, {
  alertUpdate, alertCreate
 })(AlertCreate);
// <Input
//   label="Emergency"
//   placeholder="Select Emergency Type"
//   value={this.props.emergencytype}
//   onChangeText={value => this.props.alertUpdate({ prop: 'emergencytype', value })}
// />
