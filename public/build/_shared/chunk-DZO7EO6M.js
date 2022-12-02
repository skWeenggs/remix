// app/content/Checks.js
function isBlank(txt) {
  if (txt.length <= 0)
    return true;
  else
    return false;
}
function isLength(txt) {
  if (txt.length <= 0 && txt.length >= 15) {
    return true;
  } else
    return false;
}
function isMassageLength(txt) {
  if (txt.length < 5 && txt.length > 0) {
    return true;
  } else if (txt.length > 5 && txt.length > 50) {
    return true;
  } else
    return false;
}
function validateEmail(email) {
  if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    return true;
  } else {
    return false;
  }
}
function isMobile(contact) {
  if (contact.length <= 12 && contact.length >= 10)
    return false;
  else if (contact.length > 13)
    return true;
  else
    return true;
}
function isValid(contact) {
  console.log(contact);
}

export {
  isBlank,
  isLength,
  isMassageLength,
  validateEmail,
  isMobile,
  isValid
};
//# sourceMappingURL=/build/_shared/chunk-DZO7EO6M.js.map
