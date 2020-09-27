/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import clsx from "clsx";
import Dropdown from "react-bootstrap/Dropdown";
import HeaderDropdownToggle from "../content/CustomDropdowns/HeaderDropdownToggle";
import EqualizerIcon  from "../../../_metronic/layout/assets/layout-svg-icons/Equalizer.svg";
import EuroIcon  from "../../../_metronic/layout/assets/layout-svg-icons/Euro.svg";
import MailAttachmentIcon  from "../../../_metronic/layout/assets/layout-svg-icons/Mail-attachment.svg";
import BoxNum2Icon  from "../../../_metronic/layout/assets/layout-svg-icons/BoxNum2.svg";
import GroupIcon  from "../../../_metronic/layout/assets/layout-svg-icons/Group.svg";

export default class QuickActionsPanel extends React.Component {
  render() {
    const { icon, useSVG, bgImage, iconType, gridNavSkin } = this.props;
    return (
      <Dropdown className="kt-header__topbar-item" drop="down" alignRight>
        <Dropdown.Toggle
          as={HeaderDropdownToggle}
          id="dropdown-toggle-quick-actions-panel-toggle"
        >
          <span
            className={clsx(`kt-header__topbar-icon`, {
              "kt-header__topbar-icon--warning": iconType === "warning"
            })}
          >
            {!useSVG && <i className={icon} />}

            {useSVG && (
              <EqualizerIcon className="kt-svg-icon kt-svg-icon--lg" />
            )}
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
          <form className="flex-column p-0">
            {/* begin: Head */}
            <div
              className={`kt-head kt-head--skin-${{ gridNavSkin }}`}
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <h3 className="kt-head__title text-white">
                User Quick Actions
                <span className="kt-space-15" />
                <button
                  type="button"
                  className="btn btn-success btn-sm btn-bold btn-font-md"
                >
                  23 tasks pending
                </button>
              </h3>
            </div>
            {/* end: Head */}

            <div className={`kt-grid-nav kt-grid-nav--skin-${gridNavSkin}`}>
              <div className="kt-grid-nav__row">
                <a className="kt-grid-nav__item">
                  <EuroIcon className="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg" />
                  <span className="kt-grid-nav__title">Accounting</span>
                  <span className="kt-grid-nav__desc">eCommerce</span>
                </a>

                <a className="kt-grid-nav__item">
                  <div className="d-flex align-items-center flex-column">
                    <span className="kt-grid-nav__icon">
                      <MailAttachmentIcon className="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg" />
                    </span>
                    <span className="kt-grid-nav__title">Administration</span>
                    <span className="kt-grid-nav__desc">Console</span>
                  </div>
                </a>
              </div>

              <div className="kt-grid-nav__row">
                <a className="kt-grid-nav__item">
                  <div className="d-flex align-items-center flex-column">
                    <span className="kt-grid-nav__icon">
                      <BoxNum2Icon className="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg" />
                    </span>
                    <span className="kt-grid-nav__title">Projects</span>
                    <span className="kt-grid-nav__desc">Pending Tasks</span>
                  </div>
                </a>

                <a className="kt-grid-nav__item">
                  <div className="d-flex align-items-center flex-column">
                    <span className="kt-grid-nav__icon">
                      <GroupIcon className="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg" />
                    </span>
                    <span className="kt-grid-nav__title">Customers</span>
                    <span className="kt-grid-nav__desc">Latest cases</span>
                  </div>
                </a>
              </div>
            </div>
          </form>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
