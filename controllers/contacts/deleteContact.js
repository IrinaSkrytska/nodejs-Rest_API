const Contact = require("../../model/contacts");

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contactList = await Contact.findByIdAndRemove({ id: contactId });

    if (contactList) {
      res.json({
        status: "success",
        code: 200,
        data: { contact: contactList },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact ${contactId} can not be deleted `,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Not found",
    });
  }
};

module.exports = deleteContact;
