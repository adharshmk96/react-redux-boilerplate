import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import React from 'react';
import { createDevTools } from 'redux-devtools';

export default createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-w">
        <LogMonitor />
    </DockMonitor>
)

// module.exports = devTools