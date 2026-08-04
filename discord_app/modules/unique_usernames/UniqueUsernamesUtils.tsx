const result = require("getSystemLocale").fileFinishedImporting("modules/unique_usernames/UniqueUsernamesUtils.tsx");

export const formatUsernameLiveCheckValidation = function formatUsernameLiveCheckValidation(arg0) {
  const match = require(4484) /* t */.match(arg0);
  const str = require(4484) /* t */;
  let obj = { error: null };
  const P = require(4484) /* t */.P;
  obj[0] = P.not(require(4484) /* t */.P.nullish);
  const withResult = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(13909).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  });
  const withResult1 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(13909).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(13909).NameValidationState.ERROR, message: error.error }));
  const withResult2 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(13909).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(13909).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(13909).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  });
  obj = { error: require(4484) /* t */.P.nullish };
  const withResult3 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(13909).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(13909).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(13909).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: callback(13909).NameValidationState.ERROR, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.mCrAUb);
    return obj;
  });
  return match.with({ rateLimited: true }, () => {
    const obj = { type: callback(13909).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(13909).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(13909).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: callback(13909).NameValidationState.ERROR, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.mCrAUb);
    return obj;
  }).with(obj, () => ({ type: callback(13909).NameValidationState.INTERNAL_ERROR, message: "" })).otherwise(() => {

  });
};