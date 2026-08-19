// === Module 14121: formatUsernameLiveCheckValidation ===

// Module 14121 (formatUsernameLiveCheckValidation)
import obj132 from "obj132" /* 2 */;
import t from "t" /* 4486 */;

const result = obj132.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesUtils.tsx");

export const formatUsernameLiveCheckValidation = function formatUsernameLiveCheckValidation(arg0) {
  const match = t.match(arg0);
  let obj = { error: null };
  const P = t.P;
  obj[0] = P.not(t.P.nullish);
  const withResult = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14116).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  });
  const withResult1 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14116).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14116).NameValidationState.ERROR, message: error.error }));
  const withResult2 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14116).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14116).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(14116).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  });
  obj = { error: t.P.nullish };
  const withResult3 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14116).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14116).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(14116).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: callback(14116).NameValidationState.ERROR, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.mCrAUb);
    return obj;
  });
  return match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14116).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14116).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(14116).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: callback(14116).NameValidationState.ERROR, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.mCrAUb);
    return obj;
  }).with(obj, () => ({ type: callback(14116).NameValidationState.INTERNAL_ERROR, message: "" })).otherwise(() => {

  });
};