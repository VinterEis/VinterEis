exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  // For now just return the data (testing)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Feedback sent!", data }),
  };
};