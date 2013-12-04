var jobs = {

    getJobs: function () {
        var jobs = [];

        job = new Object();
        job.JobNumber = '1111111';
        job.MovementNumber = '111111111';

        jobs.push(job);
        
                job = new Object();
        job.JobNumber = '2222222';
        job.MovementNumber = '222222222';

        jobs.push(job);

        return jobs;
    }

}