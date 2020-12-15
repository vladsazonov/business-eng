import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  buttons: {
    display: 'flex',
    width: '100%'
  },
  button: {
    margin: '2px 4px'
  }
});

export default function AcceptDialog(props) {
  const classes = useStyles();
  const { onClose, open, clickedUser } = props;

  const handleClose = () => {
    onClose(clickedUser);
  };

  const handleListItemClick = value => {
    const user = clickedUser;

    user.result = value;
    onClose(user);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="simple-dialog-title">Примите решение</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Пользователь: {clickedUser && clickedUser.name}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => handleListItemClick(false)}>
          Отклонить
        </Button>
        <Button color="primary" onClick={() => handleListItemClick(true)}>
          Принять
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AcceptDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  clickedUser: PropTypes.any
};
