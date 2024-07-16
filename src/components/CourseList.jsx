import React from 'react'
import useCourseStore from '../app/courseStore'

function CourseList() {
    const {courses,removeCourse,toggleCourseStatus} = useCourseStore(
        (state)=>({
            courses:state.courses,
            removeCourse:state.removeCourse,
            toggleCourseStatus:state.toggleCourseStatus
        })
    )
  return (
    <>
        <ul>
            {courses.map((course,i)=>{
                return (
                    <React.Fragment key={i}>
                        <li className={'course-item'}
                            style={{
                                backgroundColor:course.completed? "#00ff0044":"white"
                            }}
                            >
                                <span className="course-item-col-1">
                                    <input
                                    checked={course.completed} 
                                    type="checkbox" 
                                    onChange={(e)=>{
                                        toggleCourseStatus(course.id)
                                    }}
                                    
                                    />
                                </span>
                                <span>
                                    {course?.title}
                                </span>
                                <button onClick={()=>{
                                    removeCourse(course.id)
                                }}>
                                Delete
                                </button>
                            
                        </li>
                    </React.Fragment>
                )
            })}
        </ul>    
    </>
  )
}

export default CourseList