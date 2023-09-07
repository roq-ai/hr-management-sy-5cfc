import * as yup from 'yup';

export const timeTrackingValidationSchema = yup.object().shape({
  date: yup.date().required(),
  hours_worked: yup.number().integer().required(),
  overtime: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
