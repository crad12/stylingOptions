//MATERIAL UI
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

//icons//
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import BuildIcon from '@material-ui/icons/Build';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

const styles = {
  root: {
    width: '100%',
    marginTop: '5em',
    backgroundColor: 'blue',
    color: 'red'
  },
  icons: {
    color: 'red'
  }
}

class Footer extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.root}>
          <BottomNavigationAction className={classes.icon} label="SHOP" icon={<ShoppingCartIcon />} />
    <BottomNavigationAction className={classes.icon} label="FAQ" icon={<QuestionAnswerIcon />} />
          <BottomNavigationAction className={classes.icon} label="SUPPORT" icon={<ContactSupportIcon />} />
          <BottomNavigationAction className={classes.icon} label="Maintainance" icon={<BuildIcon />} />
    <BottomNavigationAction className={classes.icon} label="CONTACT" icon={<PermContactCalendarIcon />}/>
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer);