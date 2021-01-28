import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactListItem from "./ContactListItem";
import ContactsWrapper from "./ContactsStyled";

const ContactList = ({ contacts, filter, deleteContactById }) => {
  return (
    <ContactsWrapper>
      <TransitionGroup component="ul" className="contact-list">
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={250}
              classNames="my-contact-list-item"
            >
              <ContactListItem
                contact={contact}
                deleteContactById={deleteContactById}
              />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ContactsWrapper>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContactById: PropTypes.func,
};
