import React from 'react'
import { useState } from 'react'
import useCourseStore from '../app/courseStore'

const CourseForm=()=>{
    const addCourse = useCourseStore((state)=>state.addCourse)
    const [courseTitle,setCourseTitle] = useState('')
    console.log("courseform rendered")
     const handleCourseSubmit =()=>{
            if(!courseTitle)
                return alert("Course title is required");
            addCourse({
                id:Math.ceil(Math.random()*1000),
                title:courseTitle
            })
            setCourseTitle("")
                
            
        }
    return<>
        <div className='form-container'>
            <input 
            value={courseTitle}
            onChange={(e)=>{
                setCourseTitle(e.target.value)
            }}
            type="text" 
            className="form-input" />
            <button onClick={handleCourseSubmit} className="form-button">Add Course</button>
        </div>
    
    </>
}

export default CourseForm