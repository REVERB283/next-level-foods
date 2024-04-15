import React from "react";

const DynamicComponent = ({ params }) => {
	return <div>/meals/{params.slug}</div>;
};

export default DynamicComponent;
