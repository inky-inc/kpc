import React, { PropTypes } from 'react';

const ModalHeader = (props) => (
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
  </div>
);

export default ModalHeader;