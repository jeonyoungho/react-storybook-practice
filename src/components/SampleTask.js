import React from 'react';

export default function SampleTask({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <div className="list-item">
            <input type="text" value={title} readOnly={true} />
        </div>
    );
}