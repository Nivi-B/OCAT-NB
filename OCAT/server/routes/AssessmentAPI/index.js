
const { AssessmentService } = require(`../../libs`);

// import { AssessmentService } from '../../services/AssessmentService';
const router = require(`express`).Router();

router.post(`/submit`, (req, res, next) => {
  try {
    const { assessment } = req.body;
    AssessmentService.submit(assessment);

    // call the submit function from the server/libs/AssessmentService
  } catch (error) {
    next(error);
  }
});

router.get(`/list`, async (req, res, next) => {
  try {
    const assessments = await AssessmentService.getList();
    console.log(`byeeeee`);
    console.log(`assessments`, assessments);
    // call the getList function from the server/libs/AssessmentService
    // return assessments to front-end

    res.status(200).json({
      data: assessments,
      message: `Successfully retrieved assessments`,
      status: `SUCCESS`,
    });
  }
  catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/assessment`;
