import Joi from 'joi';

const createContact = {
  body: Joi.object().keys({
    name: Joi.string().required().min(3).max(30),
    phone: Joi.string().min(10).max(15),
    instagram: Joi.string(),
    email: Joi.string().email()
  })
};

const getContacts = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer()
  })
};

export default {
  createContact,
  getContacts
};
