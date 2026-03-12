import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/feedback.css";

const FeedbackForm = () => {
  const [success, setSuccess] = useState(false);

 
  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    phone: Yup.string()
      .required("This field is required")
      .matches(/^\d+$/, "Digits only please"),
    email: Yup.string()
      .required("This field is required")
      .email("Invalid email format")
      .test("unique-email", "Email already used", (value) => {
        const feedbackList =
          JSON.parse(localStorage.getItem("feedbackList")) || [];
        return !feedbackList.some((item) => item.email === value);
      }),
    eventName: Yup.string().required("This field is required"),
    eventDate: Yup.string().required("This field is required"),
    rating: Yup.number()
      .required("This field is required")
      .min(1, "Rating must be 1 to 5")
      .max(5, "Rating must be 1 to 5"),
    message: Yup.string().required("This field is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    eventName: "",
    eventDate: "",
    rating: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];
    feedbackList.push(values);
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
    setSuccess(true);
    resetForm();
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="feedback-page">
      <header className="site-header">
        <div className="nav-container">
          <h1>Community Voice</h1>
          <a href="/view" className="view-link">
            View Feedback
          </a>
        </div>
        <p className="moto">We value your feedback on our recent events.</p>
      </header>


      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="grid-row">
              <div className="form-group">
                <label>First Name</label>
                <Field type="text" name="firstName" placeholder="John" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error show"
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <Field type="text" name="lastName" placeholder="Doe" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error show"
                />
              </div>
            </div>

            <div className="grid-row">
              <div className="form-group">
                <label>Phone Number</label>
                <Field type="text" name="phone" placeholder="017XXXXXXXX" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error show"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="alex@example.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error show"
                />
              </div>
            </div>

            <div className="grid-row">
              <div className="form-group">
                <label>Event Name</label>
                <Field as="select" name="eventName">
                  <option value="">Select an event</option>
                  <option value="Winter Festival">Winter Festival</option>
                  <option value="Spring Gala">Spring Gala</option>
                  <option value="Community Meetup">Community Meetup</option>
                  <option value="Charity Drive">Charity Drive</option>
                  <option value="Tech Workshop">Tech Workshop</option>
                </Field>
                <ErrorMessage
                  name="eventName"
                  component="div"
                  className="error show"
                />
              </div>

              <div className="form-group">
                <label>Event Date</label>
                <Field type="date" name="eventDate" />
                <ErrorMessage
                  name="eventDate"
                  component="div"
                  className="error show"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Rating (1 - 5)</label>
              <Field
                type="number"
                name="rating"
                min="1"
                max="5"
                placeholder="5"
              />
              <ErrorMessage
                name="rating"
                component="div"
                className="error show"
              />
            </div>

            <div className="form-group">
              <label>Feedback Message</label>
              <Field
                as="textarea"
                name="message"
                placeholder="Tell us what you liked or how we can improve..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error show"
              />
            </div>

            <button type="submit">Submit Feedback</button>

            {success && (
              <div className="success show">Feedback saved successfully!</div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FeedbackForm;
