"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = React.useState(isOpen);

  React.useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = React.useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 3000);
  }, [disabled, onClose]);

  return <div>Modal</div>;
};

export default Modal;
