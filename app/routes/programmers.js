import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return ['uncle zac', 'aunt alex', 'tony t']
  }
})
