/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { User } from "../../../common/models/user/user";
import { SvgIcon } from "../../components/svg-icon/svg-icon";
import { STRINGS } from "../../config/constants";
import { HomeHeaderBar } from "../home-view/home-header-bar/home-header-bar";
import { Button } from "../../components/button/button";
import "./settings-view.scss";

export interface SettingsViewProps {
  user?: User;
}

export interface SettingsViewState {
}

export class SettingsView extends React.Component<SettingsViewProps, SettingsViewState> {

  state = { };

  renderSettingsIcon() {
    const { user } = this.props;
    if (!user || !user.allow["settings"]) return null;

    return <div className="icon-button" onClick={() => ({})}>
      <SvgIcon svg={require("../../icons/full-settings.svg")}/>
    </div>;
  }

  render() {
    const { user } = this.props;
    const { } = this.state;

    return <div className="settings-view">
      <HomeHeaderBar
        user={{　id: "1", displayName: "liguifa", email: "liguifa@zuoyebang.com", allow: null　}}
        onNavClick={() => ({})}
        customization={null}
        title={STRINGS.home}
      >
        {this.renderSettingsIcon()}
      </HomeHeaderBar>

      <div className="container">
        <div className="settings-view-sider">
            <Button className="settings-view-sider-button settings-view-sider-active" type="primary" title={STRINGS.connections} />
        </div>
        <div className="setting-view-body"></div>
      </div>
    </div>;
  }
}
