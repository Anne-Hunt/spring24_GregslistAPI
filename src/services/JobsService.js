import { dbContext } from "../db/DbContext.js"


class JobsService {
    async getJobs() {
        const jobs = await dbContext.Jobs.find()
        return jobs
    }

    async searchJobs(searchQuery) {
        const jobs = await dbContext.Jobs.find(searchQuery)
        return jobs
    }

    async getJobById(jobId) {
        const job = await dbContext.Jobs.findById(jobId)
        if (!job) throw new Error(`No job at that id: ${jobId}`)
        return job
    }
}

export const jobsService = new JobsService()