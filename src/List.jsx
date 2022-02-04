import React from 'react';

const List = (props) => {
    return (
        <>
            <li><button onClick={() => {
                props.check(props.id)
            }}>✔️</button> {props.item}</li>
        </>
    );
};

export default List;