var _excluded = ["href", "alt"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CookiePolicyBanner from '@edx/frontend-component-cookie-policy-banner';
import { getConfig } from '@edx/frontend-platform';
import { getLocale, injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';

// eslint-disable-next-line import/no-unresolved
import { logoHeader } from '@edx/brand';
import AnonymousUserMenu from './AnonymousUserMenu';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import messages from './messages';
var LinkedLogo = function LinkedLogo(_ref) {
  var href = _ref.href,
    alt = _ref.alt,
    attributes = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, attributes), /*#__PURE__*/React.createElement("img", {
    className: "d-block",
    src: logoHeader,
    alt: alt
  }));
};
LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
var LearningHeader = function LearningHeader(_ref2) {
  var courseOrg = _ref2.courseOrg,
    courseNumber = _ref2.courseNumber,
    courseTitle = _ref2.courseTitle,
    intl = _ref2.intl,
    showUserDropdown = _ref2.showUserDropdown;
  var _useContext = useContext(AppContext),
    authenticatedUser = _useContext.authenticatedUser;
  var headerLogo = /*#__PURE__*/React.createElement(LinkedLogo, {
    className: "logo",
    href: "".concat(getConfig().LMS_BASE_URL, "/dashboard"),
    src: logoHeader,
    alt: getConfig().SITE_NAME
  });
  var ENABLE_COOKIE_POLICY_BANNER = getConfig().ENABLE_COOKIE_POLICY_BANNER !== undefined ? getConfig().ENABLE_COOKIE_POLICY_BANNER : true;
  return /*#__PURE__*/React.createElement(React.Fragment, null, ENABLE_COOKIE_POLICY_BANNER ? /*#__PURE__*/React.createElement(CookiePolicyBanner, {
    languageCode: getLocale()
  }) : null, /*#__PURE__*/React.createElement("header", {
    className: "learning-header"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sr-only sr-only-focusable",
    href: "#main-content"
  }, intl.formatMessage(messages.skipNavLink)), /*#__PURE__*/React.createElement("div", {
    className: "container-fluid d-flex align-items-center"
  }, headerLogo, /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-1 course-title-lockup",
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "d-block small m-0"
  }, courseOrg, " ", courseNumber), /*#__PURE__*/React.createElement("span", {
    className: "d-block m-0 font-weight-bold course-title"
  }, courseTitle)), showUserDropdown && authenticatedUser && /*#__PURE__*/React.createElement(AuthenticatedUserDropdown, {
    username: authenticatedUser.username
  }), showUserDropdown && !authenticatedUser && /*#__PURE__*/React.createElement(AnonymousUserMenu, null))));
};
LearningHeader.propTypes = {
  courseOrg: PropTypes.string,
  courseNumber: PropTypes.string,
  courseTitle: PropTypes.string,
  intl: intlShape.isRequired,
  showUserDropdown: PropTypes.bool
};
LearningHeader.defaultProps = {
  courseOrg: null,
  courseNumber: null,
  courseTitle: null,
  showUserDropdown: true
};
export default injectIntl(LearningHeader);
//# sourceMappingURL=LearningHeader.js.map