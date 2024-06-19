export default function HomeMenu(){
    return(
        <section>
        <div className='text-center'>
        <h3 className='uppercase text-gray-600'>
            Check out What you get Here!
        </h3>
        <h2 className='text-primary font-bold text-4xl italic'>Rebot Talents</h2>
        </div>
        <div className='grid grid-cols-4 gap-6 my-4'>
            <div className='bg-gray-300 p-4 rounded-lg text-center'>
                <h2 className='font-semibold my-4'>Global Search</h2>
                <img src="/gs.png" alt="globalsearch" />
                <p className='text-gray-500 text-sm my-2'>We take care of the searching world wide for the best, 
                    recruiting and interviewing process at the initial stage. 
                    Our expert will search more best options for your company.</p>
                
            </div>
            <div className='bg-gray-300 p-4 rounded-lg text-center'>
                <h2 className='font-semibold my-4'>Cost Control</h2>
                <img src="/budget.png" alt="budget" />
                <p className='text-gray-500 text-sm my-2'>The best talent at a fraction of the price.
                    Our clients save an average of 70% on payroll costs of hiring overseas. Best business
                    hack for the startup companies.
                </p>
                
            </div>
            <div className='bg-gray-300 p-4 rounded-lg text-center'>
                <h2 className='font-semibold my-4'>Stress Free</h2>
                <img src="/stressfree.png" alt="stressfree" />
                <p className='text-gray-500 text-sm my-2'>From the starting point of searching talents,
                    interview at initial points based on the requirement of job. Again providing 
                    with best 3 candidate for the same position will reduce the stress of overwork of company.
                </p>
                
            </div>
            <div className='bg-gray-300 p-4 rounded-lg text-center'>
                <h2 className='font-semibold my-4'>Every Role</h2>
                <img src="/everyrole.png" alt="everyrole" />
                <p className='text-gray-500 text-sm my-2'>Not limited for just one field but the varities of job position talents can 
                    be arranged according to the requiement. Speicially the IT field with frontend, backend, data analysis, fullstack developer and many more.
                </p>
                
            </div>
        </div>
        </section>
        
    );
}