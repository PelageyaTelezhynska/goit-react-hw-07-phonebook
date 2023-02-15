import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

// export const selectVisibleContacts = state => {
//   const getFilteredContacts = (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);

//   const visibleContacts = getFilteredContacts(contacts, filter);

//   if (visibleContacts.length === 0) {
//     return contacts;
//   } else {
//     return visibleContacts;
//   }
// };

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const getFilteredContacts = (contacts, filter) => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };
    const visibleContacts = getFilteredContacts(contacts, filter);

    if (visibleContacts.length === 0) {
      return contacts;
    } else {
      return visibleContacts;
    }
  }
);
