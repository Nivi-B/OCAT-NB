const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {
  try {
    Assessments.forge({
      created_at: assessment.created_at,
      cat_name: assessment.data.cat_name,
      cat_date_of_birth: assessment.data.cat_date_of_birth,
      score: assessment.score,
      risk_level: assessment.risk_level,
    })
      .save()
      .then(response => {
        console.log(response.data);
        console.log(response);
      });
  }
  catch (err) {
    throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
  }

  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
};

exports.getList = async () => {
  console.log(`helloo`);
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database

  // SELECT *
  // FROM assessments;

  const assessments = await Assessments.fetchAll();

  return assessments;
};
