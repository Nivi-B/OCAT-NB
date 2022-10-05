const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {

    Assessments.forge({
      created_at: assessment.created_at,
      cat_name: assessment.data.cat_name,
      cat_date_of_birth: assessment.data.cat_date_of_birth,
      score: assessment.score,
      risk_level: assessment.risk_level,
    })
      .save()
  }
  catch (err) {
    throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
  }

  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
};

exports.getList = () => {
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
